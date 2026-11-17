import React from 'react'
import './Works.css'

const Works = () => {
    const myWorks = [{
        name: 'Project 1',
        description: 'Lorem  Lorem Ipsum telah menjadi t0an, apabila pence kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia telah dipopularkan pada tahun 1960an dengan penerbitan Letraset yang mebawa kangungan Lorem Ipsum, dan lebih terkini dengan sofwer pencetakan desktop seperti Aldus PageMaker yang telah menyertakan satu versi Lorem Ipsum.'
    },
  {
        name: 'Project 2',
        description: 'Lorem Ipsettelah menjadi text contoh semenjak tahuan, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia telah dipopularkan pada tahun 1960an dengan penerbitan Letraset yang mebawa kangungan Lorem Ipsum, dan lebih terkini dengan sofwer pencetakan desktop seperti Aldus PageMaker yang telah menyertakan satu versi Lorem Ipsum.'
    },
  {
        name: 'Project 3',
        description: 'Lorem dan typesetting. Lorem Ipsum telah menjntoh semenjak tahun ke 1500an, apabila pencetak yang kurang terkenal mengambil sebuah galeri cetak dan merobakanya menjadi satu buku spesimen. Ia telah bertahan bukan hanya selama lima kurun, tetapi telah melonjak ke era typesetting elektronik, dengan tiada perubahan ketara. Ia telah dipopularkan pada tahun 1960an dengan penerbitan Letraset yang mebawa kangungan Lorem Ipsum, dan lebih terkini dengan sofwer pencetakan desktop seperti Aldus PageMaker yang telah menyertakan satu versi Lorem Ipsum.'
    }]
  return (
    <section className = "works">
        <h2 style={{textAlign: 'center',marginBottom: '10'}}>My Works</h2>
        <div className='card-grid'>
         {
          myWorks.map(
            item => (
              <div className='card'>
                <h3 style = {{color:'white', fontFamily:'sans-serif'}}>{item.name}</h3>
                    <p style={{color:'#bdbaba'}}>{item.description}</p>
                </div>
            )
          )
         }
         
        </div>

    </section>
  )
}

export default Works