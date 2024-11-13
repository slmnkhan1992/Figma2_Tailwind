


export default function Hero(){
return(
    <div className="h-[1028px] w-[1046px] absolute left-[197px] top-[104px] py-[80px] gap-[80px] flex flex-col items-center">
        <div className="w-[701px] h-[496px] py-[40px] flex gap-[40px] flex-col items-center">
            <h5 className={` text-[#23A6F0] montserrat-bold text-[16px] tracking-[0.5px] `}>Welcome</h5>
            <h1 className={`montserrat-bold text-[58px] tracking-[0.2px] leading-[80px] text-[#FFFFFF] text-center`}>Selling on the <br /> internet like a pro</h1>
            <h4 className={` text-[#ffffff] text-[20px] font-normal montserrat-font text-center leading-[30px] tracking-[0.2px] `}>We know how large objects will act, but things on a 
           <br /> small scale just do not act that way.</h4>
            <div className='w-[365px] h-[52px] flex gap-[10px]' >
                <button className='w-[193px] h-[52px] rounded-[5px] py-[15px] px-[40px] bg-[#23A6F0] text-[#ffffff]  montserrat-bold  text-[14px]'>Get Quote Now</button>
                <button className={`border-[#23A6F0] text-[#23A6F0] w-[162px] h-[52px] border-solid border-[1px] py-[15px] px-[40px] rounded-[5px] text-[14px] leading-[22px] montserrat-bold`}>Learn More</button>
            </div>
        </div>
        <div className="w-[1046px] h-[292px] flex gap-[30px]">
              <div className="w-[328px] h-[292px] py-[35px] px-[40px] flex gap-[20px] flex-col bg-[#ffffff]"> 
                <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1]"></div>
                <h3 className="text-[16px] leading-[24px] tracking-[0.1px] montserrat-bold text-[#252B42]">training Courses</h3>
                 <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
                 <p className="text-[14px] leading-[20px] tracking-[0.2px]  text-[#737373] font-normal">The gradual accumulation of information about atomic and small-scale behaviour...</p>

              </div>
              <div className="w-[328px] h-[292px] py-[35px] px-[40px] flex gap-[20px] flex-col bg-[#ffffff]"> 
                <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8]"></div>
                <h3 className="text-[16px] leading-[24px] tracking-[0.1px] montserrat-bold text-[#252B42]">2,769 online courses</h3>
                 <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
                 <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]  montserrat-font">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>
              <div className="w-[328px] h-[292px] py-[35px] px-[40px] flex gap-[20px] flex-col bg-[#23A6F0]"> 
                <div className="w-[70px] h-[76px] rounded-[10px] bg-[#ffffff]"></div>
                <h3 className="text-[16px] leading-[24px] tracking-[0.1px] montserrat-bold text-[#ffffff] ">training Courses</h3>
                 <div className="h-[2px] w-[50px] bg-[#ffffff]"></div>
                 <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#ffffff] montserrat-font">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>

        </div>
    </div>
)
}