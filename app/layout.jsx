import '@styles/globals.css';

export const metadata = {
  title:"share-prompts",
  description:"Discover & share AI Prompts",
}

const RootLayout = ({children}) => {
  return (
    <html lang='eng'>
      <body>
        <div className='main'>
          <div className='grandient'/> 
        </div>
        <main className='app'>
            {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout