import { useEffect, useRef } from 'react'
import Worker from "@/test.worker"

export default function Home() {
  const worker = useRef(null);
  useEffect(() => {
    worker.current = new Worker();
    worker.current.postMessage({ a: 1, b: 2 });
  }, [])
  return (
    <>
      hello worker
    </>
  )
}
