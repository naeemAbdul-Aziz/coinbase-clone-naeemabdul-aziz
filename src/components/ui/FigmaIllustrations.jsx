/**
 * Figma illustrations sourced from:
 * https://www.figma.com/design/cN9WrFnJMmdys5aClvoot1/Coinbase?node-id=10-1877
 *
 * Assets are stored locally in /src/assets/illustrations/
 */

import imgElement1  from '../../assets/illustrations/element1.svg';
import imgElement2  from '../../assets/illustrations/element2.svg';
import imgEllipse9  from '../../assets/illustrations/ellipse9.svg';
import imgEllipse10 from '../../assets/illustrations/ellipse10.svg';
import imgEllipse11 from '../../assets/illustrations/ellipse11.svg';
import imgEllipse12 from '../../assets/illustrations/ellipse12.svg';
import imgEllipse13 from '../../assets/illustrations/ellipse13.svg';
import imgEllipse14 from '../../assets/illustrations/ellipse14.svg';
import imgEllipse15 from '../../assets/illustrations/ellipse15.svg';
import imgEllipse16 from '../../assets/illustrations/ellipse16.svg';
import imgEllipse17 from '../../assets/illustrations/ellipse17.svg';
import imgEllipse31 from '../../assets/illustrations/ellipse31.svg';
import imgStar1     from '../../assets/illustrations/star1.svg';
import imgStar2     from '../../assets/illustrations/star2.svg';
import imgStar3     from '../../assets/illustrations/star3.svg';
import imgStar4     from '../../assets/illustrations/star4.svg';
import imgGroup7    from '../../assets/illustrations/group7.svg';
import imgGroup8    from '../../assets/illustrations/group8.svg';
import imgGroup9    from '../../assets/illustrations/group9.svg';
import imgGroup10   from '../../assets/illustrations/group10.svg';
import imgGroup12   from '../../assets/illustrations/group12.svg';
import imgGroup21   from '../../assets/illustrations/group21.svg';
import imgGroup29   from '../../assets/illustrations/group29.svg';
import imgGroup30   from '../../assets/illustrations/group30.svg';
import imgGroup38   from '../../assets/illustrations/group38.svg';
import imgGroup39   from '../../assets/illustrations/group39.svg';
import imgGroup41   from '../../assets/illustrations/group41.svg';
import imgGroup62   from '../../assets/illustrations/group62.svg';
import imgGroup64   from '../../assets/illustrations/group64.svg';
import imgFrame32   from '../../assets/illustrations/frame32.svg';

/** Coin transfer with orbiting dots — used on Send page */
export function IllustrationSend({ className = '' }) {
  return (
    <div className={`relative w-[280px] h-[280px] select-none ${className}`}>
      <img src={imgElement1} alt="" className="absolute inset-0 w-full h-full object-contain drop-shadow-xl" />
      <img src={imgEllipse9}  alt="" className="absolute top-[10%] left-[12%] w-10 h-10" />
      <img src={imgEllipse10} alt="" className="absolute top-[40%] left-[8%]  w-8  h-8"  />
      <img src={imgEllipse11} alt="" className="absolute top-[70%] left-[5%]  w-7  h-7"  />
      <img src={imgEllipse12} alt="" className="absolute top-[68%] right-[2%] w-10 h-10" />
      <img src={imgEllipse13} alt="" className="absolute top-[40%] right-[5%] w-8  h-8"  />
      <img src={imgEllipse14} alt="" className="absolute top-[22%] right-[30%] w-7 h-7"  />
      <img src={imgEllipse15} alt="" className="absolute top-[2%]  right-[12%] w-7 h-7"  />
      <img src={imgStar1}     alt="" className="absolute top-[94%] left-[14%] w-4 h-4"   />
      <img src={imgStar2}     alt="" className="absolute top-[82%] right-[18%] w-4 h-4"  />
    </div>
  );
}

/** Vertical tube / column chart — used on Swap page */
export function IllustrationSwap({ className = '' }) {
  return (
    <div className={`relative w-[260px] h-[260px] select-none ${className}`}>
      <div className="absolute inset-0 flex items-end justify-center gap-3 pb-6">
        <div className="flex items-center justify-center w-full h-full">
          <img src={imgGroup7}  alt="" className="w-[86px] h-[140px] object-contain rotate-180" />
          <img src={imgGroup9}  alt="" className="w-[86px] h-[90px]  object-contain ml-3" />
          <img src={imgGroup10} alt="" className="w-[86px] h-[115px] object-contain ml-3" />
        </div>
      </div>
      <img src={imgEllipse16} alt="" className="absolute top-[10%] left-[5%]  w-14 h-14 object-contain" />
      <img src={imgEllipse17} alt="" className="absolute top-[20%] right-[5%] w-14 h-14 object-contain" />
    </div>
  );
}

/** Exchange/market blocks — used on Markets page */
export function IllustrationMarkets({ className = '' }) {
  return (
    <div className={`relative w-[260px] h-[200px] select-none ${className}`}>
      <img src={imgGroup64} alt="" className="w-full h-full object-contain drop-shadow-xl" />
    </div>
  );
}

/** Floating crypto coin avatars — used on Portfolio page */
export function IllustrationPortfolio({ className = '' }) {
  return (
    <div className={`relative w-[260px] h-[280px] select-none ${className}`}>
      <img src={imgGroup62} alt="" className="w-full h-full object-contain drop-shadow-xl" />
    </div>
  );
}

/** Avatar with star trophy — used on Gainers page */
export function IllustrationGainers({ className = '' }) {
  return (
    <div className={`relative w-[220px] h-[200px] select-none ${className}`}>
      <img src={imgGroup12}  alt="" className="w-full h-full object-contain drop-shadow-xl" />
      <img src={imgEllipse31} alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 object-contain" />
      <img src={imgStar3}    alt="" className="absolute top-0 right-0 w-5 h-5 object-contain" />
    </div>
  );
}

/** @ card / wallet address — used on Receive page */
export function IllustrationReceive({ className = '' }) {
  return (
    <div className={`relative w-[240px] h-[200px] select-none ${className}`}>
      <div className="relative w-full h-full">
        <img src={imgGroup21} alt="" className="absolute top-[8%] left-[4%]  w-14 h-14 object-contain" />
        <img src={imgGroup41} alt="" className="absolute top-[5%] left-[33%] w-16 h-20 object-contain" />
        <img src={imgGroup38} alt="" className="absolute top-[5%] right-[0%] w-16 h-16 object-contain" />
        <img src={imgGroup39} alt="" className="absolute top-[5%] left-[0%]  w-16 h-16 object-contain" />
        <img src={imgFrame32} alt="" className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-32 h-10 object-contain" />
      </div>
    </div>
  );
}

/** New coin listing @ card — used on New Listings page */
export function IllustrationNewListings({ className = '' }) {
  return (
    <div className={`relative w-[240px] h-[180px] select-none ${className}`}>
      <div className="relative rounded-2xl overflow-hidden w-full h-full"
        style={{ background: 'linear-gradient(135deg, #62d19e 0%, #83dff4 50%, #f9d448 100%)' }}>
        <div className="absolute inset-0 bg-[#2050f6]/80 rounded-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
          <img src={imgGroup21} alt="" className="w-12 h-12 object-contain" />
          <div className="w-20 h-2 rounded-full bg-black/40 mt-1" />
          <div className="w-16 h-1.5 rounded-full bg-black/30" />
          <div className="w-16 h-1.5 rounded-full bg-black/30" />
        </div>
        <div className="absolute top-2 left-2">
          <img src={imgGroup29} alt="" className="w-8 h-8 object-contain" />
          <img src={imgGroup30} alt="" className="w-5 h-5 object-contain -mt-2 ml-4" />
        </div>
      </div>
    </div>
  );
}

/** Illustration with vertical element + decorative lines — hero/onboarding */
export function IllustrationHero({ className = '' }) {
  return (
    <div className={`relative w-[200px] h-[280px] select-none ${className}`}>
      <img src={imgElement2} alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[180px] object-contain" />
      <div className="absolute top-[28%] left-0 w-0.5 h-[38%] bg-[#8A33D7]" />
      <div className="absolute top-0 left-[15%] w-0.5 h-[34%] bg-white" />
      <img src={imgStar3} alt="" className="absolute bottom-[18%] left-[1%] w-5 h-5 object-contain" />
      <img src={imgStar4} alt="" className="absolute bottom-[30%] left-0  w-6 h-6 object-contain" />
    </div>
  );
}
