"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "riskrouter",
    title: "RiskRouter.sol",
    language: "solidity",
    code: `// vertex-sentinel/contracts/RiskRouter.sol\nfunction submitTradeIntent(\n  TradeIntent calldata intent,\n  bytes calldata signature\n) external returns (bool approved, string memory reason) {\n  bytes32 digest = hashTradeIntent(intent);\n\n  if (paused()) {\n    emit TradeRejected(intent.agentId, digest, "Protocol Paused");\n    return (false, "Protocol Paused");\n  }\n\n  if (block.timestamp > intent.deadline) {\n    emit TradeRejected(intent.agentId, digest, "Intent Expired");\n    return (false, "Intent Expired");\n  }\n\n  if (intent.nonce != _intentNonces[intent.agentId]) {\n    emit TradeRejected(intent.agentId, digest, "Invalid Nonce");\n    return (false, "Invalid Nonce");\n  }\n\n  AgentRegistry.AgentRegistration memory reg = agentRegistry.getAgent(intent.agentId);\n  if (intent.agentWallet != reg.agentWallet) {\n    emit TradeRejected(intent.agentId, digest, "Agent Wallet Mismatch");\n    return (false, "Agent Wallet Mismatch");\n  }\n\n  address signer = digest.recover(signature);\n  if (signer != reg.agentWallet) {\n    emit TradeRejected(intent.agentId, digest, "Invalid Signature");\n    return (false, "Invalid Signature");\n  }\n\n  (approved, reason) = _validateRisk(intent.agentId, intent.amountUsdScaled);\n  if (!approved) {\n    emit TradeRejected(intent.agentId, digest, reason);\n    return (false, reason);\n  }\n\n  _intentNonces[intent.agentId]++;\n  _recordTrade(intent.agentId);\n\n  emit TradeAuthorized(\n    digest,\n    signer,\n    intent.pair,\n    intent.action,\n    intent.amountUsdScaled,\n    intent.maxSlippageBps\n  );\n  emit TradeApproved(intent.agentId, digest, intent.amountUsdScaled);\n  return (true, "");\n}`
  },
  {
    id: "agent_brain",
    title: "agent_brain.ts",
    language: "typescript",
    code: `// vertex-sentinel/src/logic/agent_brain.ts\nasync function signIntent(intent: TradeIntent, privateKey: Hex): Promise<Authorization> {\n  const traceId = getTraceId();\n  const useCircle = process.env.USE_CIRCLE_WAAS === 'true';\n  const agentAddress = useCircle\n    ? process.env.AGENT_WALLET_ADDRESS as Hex\n    : privateKeyToAccount(privateKey).address;\n\n  await checkGeographicRestrictions();\n  await identityClient.isAgentRegistered(agentAddress);\n  const decision = await analyzeRisk(intent.pair, intent.amountUsdScaled);\n\n  const kraken = getKrakenService();\n  const ticker = await kraken.getTicker(intent.pair);\n  const realPrice = parseFloat(ticker.c[0]);\n\n  const checkpoint = await createSignedCheckpoint(getAgentMetadata(), decision, privateKey, config.chainId, currentPnL);\n\n  if (decision.action !== 'HOLD') {\n    const orderManager = new OrderManager(instrument);\n    const order = await orderManager.placeOrder({ ... });\n  }\n\n  return { intent, signature, traceId, decision, checkpointHash: checkpoint.checkpointHash };\n}`
  },
  {
    id: "types",
    title: "TradeIntent Type",
    language: "typescript",
    code: `// vertex-sentinel/src/logic/types.ts\nexport interface TradeIntent {\n  id: string;\n  agentId: string;\n  pair: string;\n  volume: bigint;\n  maxPrice: bigint;\n  deadline: bigint;\n}\n\nexport interface Authorization {\n  intent: TradeIntent;\n  signature: string;\n  traceId?: string;\n  decision?: {\n    action: string;\n    riskScore: number;\n    reasoning: string;\n    breakdown: {\n      marketRisk: number;\n      portfolioRisk: number;\n      sentimentRisk: number;\n      manualPenalty: number;\n      aiScore: number;\n    };\n    pair: string;\n  };\n}`
  }
];

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [copied, setCopied] = useState(false);

  const activeData = TABS.find(t => t.id === activeTab)!;

  useEffect(() => {
    hljs.highlightAll();
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeData.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-tech tracking-[0.1em] text-white mb-6 uppercase leading-tight">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">Showcase</span>
          </h2>
          <p className="font-mono text-xs md:text-sm tracking-wider text-gray-400">Clean interfaces. Bulletproof validation.</p>
        </div>

        <div className="bg-[#0d1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-white/10 bg-white/5 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-[11px] font-tech tracking-widest uppercase transition-colors whitespace-nowrap ${
                  activeTab === tab.id ? "text-cyan-400" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" 
                  />
                )}
              </button>
            ))}
            
            <div className="ml-auto flex items-center pr-4">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-cyan-400 font-tech uppercase text-[10px] tracking-widest transition-colors border border-white/5"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "COPIED" : "COPY_CODE"}
              </button>
            </div>
          </div>

          {/* Code View */}
          <div className="p-4 md:p-6 bg-[#090b0e] min-h-[300px] max-h-[400px] overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <pre className="m-0 text-sm md:text-base leading-relaxed">
                  <code className={`language-${activeData.language}`}>
                    {activeData.code}
                  </code>
                </pre>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
{/* 
      <style jsx global>{\`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2); 
        }
      \`}</style> */}
    </section>
  );
}
