import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full p-16 bg-base-100/50">
      <div className="max-w-md space-y-6 text-center">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 animate-bounce">
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Sakura!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
