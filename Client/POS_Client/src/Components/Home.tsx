import DoughnutChart from "./Card/Charts";

import DefaultCard from "./Card/DefaultCard";

function Home(){
    return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
    <DefaultCard 
  image="https://img.freepik.com/free-photo/young-women-with-paper-bags_23-2147669912.jpg?ga=GA1.2.1430070741.1713762896&semt=ais_hybrid"
  title="Customers"
  description="This is a description for card 1. It gives an overview of what the card is about."
  value="Read More"
/>

<DefaultCard 
  image="https://img.freepik.com/premium-photo/collection-beauty-products-including-one-which-is-called-beauty-products_978521-27403.jpg?ga=GA1.2.1430070741.1713762896&semt=ais_hybrid"
  title="Products"
  description="This is a description for card 2. It gives an overview of what the card is about."
  value="Read More"
/>

<DefaultCard 
  image="https://img.freepik.com/free-photo/storehouse-worker-using-adhesive-tape-pack-clients-orders_482257-77618.jpg?ga=GA1.2.1430070741.1713762896&semt=ais_hybrid"
  title="Orders"
  description="This is a description for card 3. It gives an overview of what the card is about."
  value="Read More"
/>

<DefaultCard 
  image="https://img.freepik.com/premium-photo/saving-money-concept-preset-young-man-arranged-coins-like-graph-growing-business-which-made-him-have-driving-force-his-work_1299032-9645.jpg?ga=GA1.2.1430070741.1713762896&semt=ais_hybrid"
  title="Income"
  description="This is a description for card 4. It gives an overview of what the card is about."
  value="Read More"
/>
    
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 p-6">
    <DoughnutChart/>

  </div>
  </>
    )
}

export default Home;