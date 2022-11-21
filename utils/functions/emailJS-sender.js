import emailjs from "emailjs-com"
// import { init } from "emailjs-com"
// init("user_PDzip8QmTQlTtRXoWwa7r")

function sendChatbotForm(message) {
  const valeriaId = "user_PDzip8QmTQlTtRXoWwa7r"
  const userId = valeriaId

  const templateId = "template_fvmynd7"

  const templateParams = {
    ...message,
  }

  emailjs
    .send("service_jl1gh4v", templateId, templateParams, userId)
    .then(res => {
      console.log("Email successfully sent!")
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err =>
      console.error(
        "Oh well, you failed. Here some thoughts on the error that occured:",
        err
      )
    )
}

export default sendChatbotForm
