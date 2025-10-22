import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Brain, Home, BarChart3, Download, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SampleReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SampleReportModal = ({ open, onOpenChange }: SampleReportModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl h-[90vh] bg-slate-900 text-white border-slate-700 overflow-y-auto">
        {/* Header */}
        <DialogHeader className="border-b border-slate-700 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6" />
              <span className="text-lg font-semibold">BrainMRI</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                <Home className="w-4 h-4" />
                Home
              </button>
              <button className="flex items-center gap-2 text-sm text-blue-400">
                <BarChart3 className="w-4 h-4" />
                Results
              </button>
              <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                <Users className="w-4 h-4" />
                Invite friends
              </button>
              <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                <span>Max</span>
              </button>
            </div>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 py-6">
          {/* Left - Brain Visualization */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-950 rounded-2xl p-8 flex items-center justify-center">
              {/* Placeholder for 3D brain - you can replace with actual 3D model */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-green-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Brain className="w-64 h-64 text-purple-400" />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                Show all
              </Button>
              <Button variant="outline" className="flex-1 bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                Compare the latest data ↻
              </Button>
            </div>
          </div>

          {/* Right - Report Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Sample Report</h2>
              <p className="text-slate-400 text-sm">
                See how we transform MRI data into clear, actionable insights
              </p>
            </div>

            <Tabs defaultValue="results" className="w-full">
              <TabsList className="bg-slate-800 border-slate-700">
                <TabsTrigger value="results" className="data-[state=active]:bg-slate-700">
                  Results
                </TabsTrigger>
                <TabsTrigger value="description" className="data-[state=active]:bg-slate-700">
                  Description
                </TabsTrigger>
                <TabsTrigger value="data" className="data-[state=active]:bg-slate-700">
                  Data
                </TabsTrigger>
              </TabsList>

              <TabsContent value="results" className="space-y-6 mt-6">
                {/* PAF Score */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">Probability of Actionable Finding (PAF)</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                      1-5%
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">95% confidence interval</p>
                </div>

                {/* Longitudinal Change Analysis */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="text-cyan-400">📈</span>
                    Longitudinal Change Analysis
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm text-slate-400">Hippocampus</div>
                      <div className="text-2xl font-bold text-green-400">+2.1%</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        ✓ Exceeds MDC
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm text-slate-400">Total GM</div>
                      <div className="text-2xl font-bold text-slate-400">-0.8%</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        ✓ Within MDC
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm text-slate-400">Ventricles</div>
                      <div className="text-2xl font-bold text-green-400">+1.2%</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        ✓ Exceeds MDC
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm text-slate-400">WMH (FLAIR)</div>
                      <div className="text-2xl font-bold text-green-400">+0.5%</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        ✓ Within MDC
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Recommendation */}
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold mb-3">Action Recommendation</h3>
                  <p className="text-sm text-slate-300 mb-3">
                    Watchful waiting recommended. Minor hippocampal volume increase observed, exceeds MDC but remains within expected biological variability.
                  </p>
                  <p className="text-xs text-slate-500">
                    Expected follow-up window: +6% | Suggested follow-up: 24 months
                  </p>
                </div>

                {/* Download Button */}
                <Button className="w-full bg-slate-800 border border-slate-600 text-white hover:bg-slate-700 py-6">
                  <Download className="w-4 h-4 mr-2" />
                  View Full Sample Report (PDF)
                </Button>
              </TabsContent>

              <TabsContent value="description" className="mt-6">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-slate-300">
                    Detailed description of the analysis methodology and findings...
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="data" className="mt-6">
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                  <p className="text-slate-300">
                    Raw data and measurements...
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SampleReportModal;
