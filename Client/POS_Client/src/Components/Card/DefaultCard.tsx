interface CardDetails {
    image: string;
    title: string;
    description: string;
    value: string;
  }
  
  function DefaultCard({ image, title, description}: CardDetails) {
    return (
      <>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={image}
            alt="Card"
            className="w-full h-32 sm:h-48 object-cover"
          />
          <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
          
            <p className="text-gray-600 mb-4">
              {description}
            </p>
           
          </div>
        </div>
      </>
    );
  }
  
  export default DefaultCard;
  