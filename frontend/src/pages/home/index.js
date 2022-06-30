import { useRef, useState } from 'react'
import Header from '../../components/header'
import useClickOutside from '../../helpers/clickOutside'

export default function Home() {
  const [visible, setVisible] = useState(true)
  const theElementReferenced = useRef(null)
  useClickOutside(theElementReferenced, () => {
    setVisible(false)
  })

  return (
    <>
      <Header />
      Home Page
    </>
  )
}
