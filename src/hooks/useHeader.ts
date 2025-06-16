import {useState} from 'react'

const useHeader = () => {

    const [open, setOpen] = useState(false)

  return {
    open,
    setOpen
  }
}

export default useHeader