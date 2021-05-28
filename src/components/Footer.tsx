import React from "react"

export const Footer = () => {
  const card = (name: string, title: string, email: string) => {
    return (
      <div>
        <p className="font-mono mb-5">
          <b>{name}</b>, {title}
          <br></br>
          <a href={"mailto:" + email}>{email}</a>
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="w-full border-white border-t-0 border mt-32"></div>
      <div className="flex">
        <div className="text-white mb-32 mt-32 m-auto ">
          <div className="float-left w-full  md:w-auto">
            <h2 className="text-6xl font-sans mb-10 underline">
              Altostruct AB
            </h2>
            <p className="font-mono mb-5">
              <b>Adress</b>
              <br></br>
              Oskarsvägen 61, 181 56 Lidingö
            </p>

            <p className="font-mono mb-5">
              <b>Email</b>
              <br></br>
              info@altostruct.se
            </p>
            <p className="font-mono mb-5">
              <b>Org. number</b>
              <br></br>
              559244-1561
            </p>
            <p className="font-mono mb-5">
              <b>Linkedin</b>
              <br></br>
              <a href="https://www.linkedin.com/company/74208556">
                Click here!
              </a>
            </p>
          </div>
          <div className="float-left w-full md:w-auto ml-64">
            <h2 className="text-6xl font-sans  mb-10 underline">core team</h2>
            {card("Erik Rehn", "CTO", "erik.rehn@gmail.com")}
            {card("Emilio Gustavsson", "COO", "emilio.gustavsson@gmail.com")}
            {card("Gustav Kasche", "Lead Developer", "gustav.kasche@gmail.com")}
          </div>
        </div>
      </div>
    </>
  )
}
