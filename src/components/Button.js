import React from 'react'
import jsPDF from 'jspdf';
import defaultImage from '../images/default.jpg'
import { useReactToPrint } from 'react-to-print'
import { useSelector } from 'react-redux';


const Button = ({ groupId, cardId, cardData }) => {
    const cardRef = useSelector(state => state.cardRef)
    const cardDoc = new jsPDF('landscape', 'px', 'a4', 'false');
    const pdfGenerate = () => {
        cardData[groupId].card[cardId].image
            ? cardDoc.addImage(cardData[groupId].card[cardId].image, 'PNG', 20, 90, 300, 250)
            : cardDoc.addImage(defaultImage, 'PNG', 20, 90, 300, 250)
        cardDoc.text(350, 110, cardData[groupId].card[cardId].defination)
        cardDoc.text(300, 40, cardData[groupId].card[cardId].term)
        cardDoc.text(500, 430, 'Made by Jay Chandlani')
        console.log(cardDoc.save(`${cardData[groupId].card[cardId].term}.pdf`));
    }
    const printCard = useReactToPrint({
        content: () => cardRef.current,
        documentTitle: cardData[groupId].card[cardId].term,

    })

    return (
        <div className='md:absolute xl:relative md:left-10 md:bottom-0  grid justify-center items-center'>
            <div className=' flex flex-col space-y-4 font-semibold '>
                <button className='hover:bg-red-500 rounded-md border-red-500 border-2 px-6 py-1 hover:text-white  hover:-translate-y-1 transition-all ease-in-out duration-150 focus:ring-4 shadow-md focus:ring-red-400 '>Share</button>
                <button
                    onClick={pdfGenerate}
                    className='hover:bg-red-500 rounded-md border-red-500 border-2 px-6 py-1 hover:text-white  hover:-translate-y-1 transition-all ease-in-out duration-150 focus:ring-4 shadow-md focus:ring-red-400 '>Download</button>
                <button
                    onClick={printCard}
                    className='hover:bg-red-500 rounded-md border-red-500 border-2 px-6 py-1 hover:text-white  hover:-translate-y-1 transition-all ease-in-out duration-150 focus:ring-4 shadow-md focus:ring-red-400 '>Print</button>
            </div>
        </div>
    )
}

export default Button