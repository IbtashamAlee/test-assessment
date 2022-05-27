import React, {useState} from "react";

export function Login(props) {
  const [isLoginTab, setIsLoginTab] = useState(true);

  return (
      <>
        <div className="min-h-full flex flex-row-reverse bg-background">
          <div className="flex-1 flex flex-col py-6 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">

            <div>
              <button className={"flex space-x-2 p-4 text-secondary items-center"}>
                <svg height={20} width={20} viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                </svg>
                <h3 className={"text-secondry"}>Back</h3>
              </button>
            </div>

            <div className={"flex justify-center"}>
              <div className={"flex bg-background py-2 px-2 rounded-lg drop-shadow-sm"}>
                <div
                    className={`btn2 mr-2 rounded py-1 px-4 cursor-pointer ${isLoginTab ? "text-primary bg-secondary" : "opacity-50"}`}
                    onClick={() => {setIsLoginTab(true)}}
                >
                  Login
                </div>
                <div
                    className={`btn2 rounded py-1 px-4 text-primary cursor-pointer ${!isLoginTab ? "text-primary bg-secondary" : "opacity-60"}`}
                    onClick={() => {setIsLoginTab(false)}}
                >
                  Register
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm lg:w-96 mt-12">
              <div className={"flex justify-center flex-col items-center"}>
                <img src={"./2.png"} className={"h-52 w-56"} alt=""/>
                <h1 className={"font-semibold text-3xl text-center mt-10"}>Welcome to <br></br> Trusted Messaging!</h1>
                <h3 className={"text-2xl font-base mt-4"}>Login</h3>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={"E-MAIL ADDRESS"}
                        autoComplete="email"
                        required
                        className="w-full h-12 rounded-lg border border-slate-200"
                    />
                    <input
                        id="password"
                        name="password"
                        placeholder={"PASSWORD"}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="w-full h-12 rounded-lg border border-slate-200"
                    />

                    <div className="flex items-center justify-end">
                      <a href="#" className="font-medium text-primary">
                        Forgot your password?
                      </a>
                    </div>

                    <div className={"flex items-center justify-center"}>
                      <button
                          type="submit"
                          className="py-3 px-24 text-white rounded-lg box-shadow-sm bg-main"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex relative w-0 flex-1 justify-center items-center">
            <img
                className="h-[450px]"
                src="./1.png"
                alt=""
            />
          </div>
        </div>
      </>
  )
}
