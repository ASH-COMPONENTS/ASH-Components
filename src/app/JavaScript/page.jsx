import CodeBoard from "../components/codeBoard/codeBoard"
// google fonts
import { M_PLUS_1_Code } from '@next/font/google'
import { Ubuntu_Mono } from '@next/font/google'

const ubuntu_Mono = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700']
})

const page = () => {
  return (
    <div className={ubuntu_Mono.className} style={{paddingTop: '60px', width: '90%', paddingLeft: '15px', paddingRight: '15px',  marginLeft: 'auto', marginRight: 'auto' }} >
        <CodeBoard />
    </div>
  )
}

export default page