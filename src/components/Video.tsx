export const Video = () => {
  return (
    <div className="flex justify-center items-center p-5 md:p-20 lg-p-0">
      <iframe 
       className="sm:rounded-2xl rounded-4xl border-0 outline-0 sm:h-[700px] h-[250px]"
       width="1200"
       height="600"
       src="https://www.youtube.com/embed/OtLB2-Qm6KA"
       title="Dive into the Cardtonic Experience with Seyi Vibez!"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerPolicy="strict-origin-when-cross-origin"
       allowFullScreen
      >

      </iframe>
    </div>
  )
}