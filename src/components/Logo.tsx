import logo from '../assets/logoWrp.svg';
import flames from '../assets/flames.svg'

interface ImageProps {
  w: number;
  h: number | string;
  w2: number;
  h2: number | string;

}

export default function Logo({ w, h, w2, h2 }: ImageProps) {
  return (
    <div className="relative">
      <img src={logo}  alt="logo" width={w} height={h}/>
      <img src={flames}  alt="flames" className="flames"  width={w2} height={h2}/>
    </div>
  )
}

