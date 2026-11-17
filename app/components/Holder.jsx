export default function Holder({ children }) {
  return (
    <div className='flex flex-col mt-20 mb-2 justify-center rounded-xl items-center gap-2 w-fit mx-auto'>
        {children}
    </div>
  )
}