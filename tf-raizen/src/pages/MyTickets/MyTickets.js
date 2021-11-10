import {useEffect} from 'react'
import gsap, {Power3} from 'gsap'
import Title from '../../components/Title/Title'
import TicketTable from '../../components/Tables/TicketTable'
import Footer from '../../components/Footer/Footer';
import './MyTickets.scss'

function MyTickets() {
  let info = gsap.timeline()

  useEffect(() => {
    info.from('.info', {opacity: 0, ease: Power3.easeOut, delay: 0.2, y: 15}, 'Start')
  }, [])


    return (
      <>
        <main className="mytickets-container">
          <article className="page">
            <section className="inner">
                <Title lineContent="Meus Chamados" />
            </section>
            <section>
                <p className="table">
                  <TicketTable />
                </p>
            </section>
          </article>
          <section className="footer-myTicket">
            <Footer />
          </section>
        </main>
      </>
    )
}

export default MyTickets