
export const ChatBubble = ({ message }) => {
  return (
    <div
      className={`flex flex-col ${
        /* message.role 이 assistant 인 경우 좌측 정렬, 그 외에는 우측 정렬 */
        message.role === "assistant" ? "items-start" : "items-end"
      }`}
    >
      <div
                className={`flex items-center ${
                  message.role === "assistant"
                    ? "bg-white-700 text-blue-500 rounded-lg overline"
                    : "bg-white-300 text-orange-500 rounded-lg overline"
                } px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
                style={{ overflowWrap: "anywhere" }}
              >
                {message.role}
              </div>
      <div
        className={`flex items-center ${
          message.role === "assistant"
            ? "bg-gray-700 text-blue-200 rounded-r-lg"
            : "bg-yellow-300 text-gray-600 rounded-l-lg"
        } px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}
      >
        {message.content}
      </div>
      
    </div>
  );
};
