import React from 'react';
import './skills.css';

const Skills = props => {
  const { head, body, face, img, shirtColor } = props;
  return (
    <>
      <div id={body}>
        {/* <div id={cloud}>
          <div id="bubblemain"></div>
          <div id="bubble2"></div>
          <div id="bubble1"></div>
        </div> */}
        <div id={face}>
          <div id="leftEye"></div>
          <div id="rightEye"></div>
        </div>
        <svg width="38px" height="51px" viewBox="0 0 38 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id={head}>
          <title>Head</title>
          <defs></defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop-HD-Copy" transform="translate(-1078.000000, -1898.000000)">
              <g id="Group-3" transform="translate(1078.000000, 1898.000000)">
                <path d="M36.8334776,25.309 C35.8092166,24.993 34.7211923,25.525 33.9287057,26.129 C34.0876079,24.529 34.2262677,23 34.3355762,21.647 C34.7687617,16.296 34.3355762,13.727 33.685798,11.052 C31.9085229,3.732 26.6607033,2 19.2520168,2 C19.1680112,2 19.0850177,2.001 19,2.001 L19,50.936 C19.2995862,50.933 19.61233,50.929 19.9534129,50.929 C24.2650256,50.929 25.1445541,49.438 26.2497843,48.037 C26.9987499,47.087 31.8548808,41.215 32.0451585,40.06 C32.2779451,38.648 32.8315724,35.571 33.0542378,33.843 C33.4742658,34.907 34.3710003,35.213 36.1422026,33.689 C37.9842531,32.104 38.8688422,26.884 36.8334776,25.309" id="Fill-26" fill="#E8C7AC"></path>
                <path d="M17.8334776,25.309 C16.8092166,24.993 15.7211923,25.525 14.9287057,26.129 C15.0876079,24.529 15.2262677,23 15.3355762,21.647 C15.7687617,16.296 15.3355762,13.727 14.685798,11.052 C12.9085229,3.732 7.6607033,2 0.252016795,2 C0.168011197,2 0.085017714,2.001 0,2.001 L0,50.936 C0.29958623,50.933 0.612329964,50.929 0.953412936,50.929 C5.26502557,50.929 6.14455407,49.438 7.24978435,48.037 C7.99874993,47.087 12.8548808,41.215 13.0451585,40.06 C13.2779451,38.648 13.8315724,35.571 14.0542378,33.843 C14.4742658,34.907 15.3710003,35.213 17.1422026,33.689 C18.9842531,32.104 19.8688422,26.884 17.8334776,25.309" id="Fill-26-Copy" fill="#F2CFB3" transform="translate(9.500000, 26.468000) scale(-1, 1) translate(-9.500000, -26.468000) "></path>
                <path d="M19.9062073,37.369256 L21,37 L19.0005469,38.787 L19,38.7865109 L18.9994531,38.787 L17,37 L18.0937927,37.369256 L18.0937927,37.369 L19,37.6748154 L19.9062073,37.369 L19.9062073,37.369256 Z" id="Combined-Shape" fill="#D7B89F"></path>
                <path d="M6.78122312,26.8024466 C6.78122312,26.8024466 4.68456291,26.6244466 4.12246654,25.2904466 C3.15305395,22.9924466 3.00234695,18.6164466 3.00234695,16.6664466 C3.00234695,12.3794466 2.80989004,6.93244661 5.91058471,3.72044661 C9.7200096,-0.225553392 16.1932825,0.00244660836 21.3936923,0.00244660836 C23.6614253,0.00244660836 25.4566715,0.0514466084 27.3466188,0.964446608 C30.0257412,2.25744661 31.6896279,3.98644661 33.2353929,6.59844661 C35.3778762,10.2214466 34.7190422,14.2674466 34.9043711,18.2884466 C35.0632244,21.7564466 35.461376,25.3554466 31.7211949,26.7744466 C31.139751,25.1284466 31.7629448,22.6354466 31.6957376,20.8854466 C31.6264939,19.0994466 31.6784267,16.9214466 30.9228551,15.2634466 C29.5715836,12.2984466 27.4637222,13.2944466 24.9200324,13.9534466 C21.1818879,14.9224466 16.9844943,15.4004466 13.113972,14.8104466 C10.9898179,14.4874466 7.76081862,12.7744466 6.79140603,15.6024466 C6.15293786,17.4674466 6.68754039,20.0094466 6.64069903,21.9624466 C6.62033322,22.8214466 6.78122312,26.8024466 6.78122312,26.8024466" id="Fill-8" fill="#01475A"></path>
              </g>
            </g>
          </g>
        </svg>

        <svg width="106px" height="80px" viewBox="0 0 106 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="body1-body">
          <title>Body</title>
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="3.061617e-15%" id="linearGradient-1">
              <stop stopColor="#C8C8C8" offset="0%"></stop>
              <stop stopColor="#979797" offset="100%"></stop>
            </linearGradient>
            <rect id="path-2" x="19" y="41" width="69" height="39"></rect>
            <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="69" height="39" fill="white">
              <use xlinkHref="#path-2"></use>
            </mask>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Desktop-HD-Copy" transform="translate(-1043.000000, -1942.000000)">
              <g id="Group-6" transform="translate(1043.000000, 1942.000000)">
                <polygon id="Fill-1" fill={shirtColor} points="24.7077 12.4888 27.6957 35.6718 29.7337 78.8798 75.9917 78.8798 78.3017 35.6718 81.0167 12.4888"></polygon>
                <path d="M61.5211,15.6025 C61.5211,15.6025 58.9521,24.1095 52.8621,24.0475 C47.0181,23.9885 45.0291,15.6025 45.0291,15.6025 L45.0291,0.1195 L61.5211,0.1195 L61.5211,15.6025 Z" id="Fill-2" fill="#F2CFB3"></path>
                <path d="M24.7076,12.4889 C24.7076,12.4889 3.0416,55.6709 0.9546,60.5229 C0.4836,61.6169 0.3686,62.7249 0.1726,63.7009 C-0.9104,69.0989 3.2416,74.1289 8.7476,74.1289 L23.2906,75.1579 C23.2906,75.1579 28.7756,75.6149 29.1786,68.3599 C29.4656,63.1989 26.4066,60.0449 26.4066,60.0449 L19.3756,58.1559 L28.0316,36.9159 C28.0316,36.9159 25.0026,12.4889 24.7076,12.4889" id="Fill-12" fill={shirtColor}></path>
                <path d="M14.4474,70.7817 C14.4474,74.6017 18.9874,74.4937 22.7144,74.4937 C26.4414,74.4937 28.9564,71.2277 28.9564,67.4077 C28.9564,63.5867 25.7744,59.3027 22.5454,61.1647 C18.1594,63.6957 14.4474,68.4197 14.4474,70.7817" id="Fill-14" fill={shirtColor}></path>
                <path d="M28.4983,64.8067 C28.2023,63.9577 27.7763,63.1647 27.2573,62.5067 C26.7763,62.2017 26.1443,61.9667 25.3293,61.8257 C24.3803,61.6597 23.2623,61.4867 22.1263,61.4147 C17.9253,63.9957 14.4473,68.4957 14.4473,70.7817 C14.4473,71.5977 14.6563,72.2337 15.0183,72.7297 C16.2053,73.3987 18.2453,70.9507 20.0153,70.7817 C22.3773,70.5557 23.4653,70.5297 25.7513,70.2757 C27.2533,68.5667 28.4843,66.4917 28.4983,64.8067" id="Fill-16" fill="#E0BFA6"></path>
                <path d="M91.3665,70.7817 C91.3665,74.6017 86.8265,74.4937 83.0995,74.4937 C79.3725,74.4937 76.8575,71.2277 76.8575,67.4077 C76.8575,63.5867 80.0395,59.3027 83.2685,61.1647 C87.6545,63.6957 91.3665,68.4197 91.3665,70.7817" id="Fill-18" fill="#12A697"></path>
                <path d="M77.3156,64.8067 C77.6116,63.9577 78.0376,63.1647 78.5566,62.5067 C79.0376,62.2017 79.6696,61.9667 80.4846,61.8257 C81.4336,61.6597 82.5516,61.4867 83.6876,61.4147 C87.8886,63.9957 91.3666,68.4957 91.3666,70.7817 C91.3666,71.5977 91.1576,72.2337 90.7956,72.7297 C89.6086,73.3987 87.5686,70.9507 85.7986,70.7817 C83.4366,70.5557 82.3486,70.5297 80.0626,70.2757 C78.5606,68.5667 77.3296,66.4917 77.3156,64.8067" id="Fill-20" fill="#E0BFA6"></path>
                <g id="Group-4" transform="translate(45.000000, 0.000000)">
                  <path d="M7.8581,0.1196 L7.8581,24.0476 L7.8621,24.0476 C13.9521,24.1096 16.5211,15.6026 16.5211,15.6026 L16.5211,0.1196 L7.8581,0.1196 Z" id="Fill-22" fill="#F2CFB3"></path>
                  <path d="M8,0 L8,9.503 C10.938,9.593 13.966,8.924 16.663,7.591 L16.663,0 L8,0 Z" id="Fill-24" fill="#E0BFA6"></path>
                  <path d="M0,0 L0,9.503 C2.938,9.593 5.966,8.924 8.663,7.591 L8.663,0 L0,0 Z" id="Fill-24-Copy" fill="#E0BFA6" transform="translate(4.331500, 4.755512) scale(-1, 1) translate(-4.331500, -4.755512) "></path>
                </g>
                <path d="M81.1063,12.4889 C81.1063,12.4889 102.7723,55.6709 104.8593,60.5229 C105.3303,61.6169 105.4453,62.7249 105.6413,63.7009 C106.7243,69.0989 102.5723,74.1289 97.0663,74.1289 L82.5233,75.1579 C82.5233,75.1579 77.0383,75.6149 76.6353,68.3599 C76.3483,63.1989 79.4073,60.0449 79.4073,60.0449 L86.4383,58.1559 L77.7823,36.9159 C77.7823,36.9159 80.8113,12.4889 81.1063,12.4889" id="Fill-35" fill={shirtColor}></path>
                <path d="M91.3665,70.7817 C91.3665,74.6017 86.8265,74.4937 83.0995,74.4937 C79.3725,74.4937 76.8575,71.2277 76.8575,67.4077 C76.8575,63.5867 80.0395,59.3027 83.2685,61.1647 C87.6545,63.6957 91.3665,68.4197 91.3665,70.7817" id="Fill-37" fill={shirtColor}></path>
                <path d="M77.3156,64.8067 C77.6116,63.9577 78.0376,63.1647 78.5566,62.5067 C79.0376,62.2017 79.6696,61.9667 80.4846,61.8257 C81.4336,61.6597 82.5516,61.4867 83.6876,61.4147 C87.8886,63.9957 91.3666,68.4957 91.3666,70.7817 C91.3666,71.5977 91.1576,72.2337 90.7956,72.7297 C89.6086,73.3987 87.5686,70.9507 85.7986,70.7817 C83.4366,70.5557 82.3486,70.5297 80.0626,70.2757 C78.5606,68.5667 77.3296,66.4917 77.3156,64.8067" id="Fill-39" fill="#E0BFA6"></path>
                <use id="Rectangle-136" stroke="url(#linearGradient-1)" mask="url(#mask-3)" strokeWidth="2" fill="#D8D8D8" xlinkHref="#path-2"></use>
              </g>
            </g>
          </g >
        </svg >
      </div >
      <img src={img} className="laptop-logo" />
    </>
  )
}

export default Skills;