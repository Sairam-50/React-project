import Logo from "./assets/100big.png";
import X from "./assets/x big.svg";

function login() {
  return (
    <>
      <div className="w-[1440px] h-[827px] px-[161.94px] py-[236.50px] bg-neutral-1000 justify-center items-center inline-flex">
        <div className="self-stretch justify-start items-center gap-[100px] inline-flex">
          <div className="justify-center items-end gap-0.5 flex">
            {/* <div class="w-[136.13px] h-[145.24px] relative"> */}
            <img
              src={Logo}
              alt="100 logo"
              className="w-[455px] h-[199px] fill-neutral-50"
            />
            <img
              src={X}
              alt="X logo"
              className="w-[136.129px] h-[145.238px] "
            />
          </div>
        </div>
        <div className="px-7 flex-col justify-start items-start gap-10 inline-flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-neutral-50 text-5xl font-bold font-inter">
              Happening now
            </div>
            <div className="text-neutral-50 text-[26px] font-bold font-inter">
              Join today.
            </div>
          </div>
          <div className="self-stretch px-6 py-2 bg-stone-50 rounded-[65px] shadow backdrop-blur-[47.34px] justify-center items-center gap-2.5 inline-flex">
            <button className="text-center text-neutral-1000 text-base font-bold font-inter">
              Create account
            </button>
          </div>
          <div className="self-stretch justify-center items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 h-[0px] border border-neutral-700" />
            <div className="text-center text-neutral-50 text-base font-normal font-chirp">
              or
            </div>
            <div className="grow shrink basis-0 h-[0px] border border-neutral-700" />
          </div>
          <div className="self-stretch h-[79px] flex-col justify-start items-start gap-5 flex">
            <div className="text-neutral-50 text-xl font-medium font-inter">
              Already have an account?
            </div>
            <div className="self-stretch px-6 py-2 rounded-[65px] shadow border border-white border-opacity-25 backdrop-blur-[47.34px] justify-center items-center gap-2.5 inline-flex">
              <button className="text-center text-sky-500 text-base font-bold font-inter">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
