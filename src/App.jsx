import { NavBar, Hero, Stats, Business, Billing, CardDeal, FeedbackCard, Client, CTA, Footer } from "./containers/exports";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">

      <NavBar />
      <div className="bg-blue-gradient">
        <Hero />
      </div>
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <FeedbackCard />
      <Client />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
