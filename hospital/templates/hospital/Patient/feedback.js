const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".send-msg");
const click_val = false;
let userMessage;

const createChatli = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg></span><p>${message}</p>`;

  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatbox.appendChild(createChatli(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    chatbox.appendChild(createChatli("Thinking... ", "incoming"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
  }, 600);
};

sendChatBtn.addEventListener("click", handleChat);
