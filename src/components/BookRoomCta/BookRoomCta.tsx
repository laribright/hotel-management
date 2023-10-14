'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setNoOfChildren: Dispatch<SetStateAction<number>>;
  calcMinCheckoutDate: () => Date | null;
  price: number;
  discount: number;
  adults: number;
  noOfChildren: number;
  specialNote: string;
  isBooked: boolean;
  handleBookNowClick: () => void;
};

const BookRoomCta: FC<Props> = props => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    calcMinCheckoutDate,
    setAdults,
    setNoOfChildren,
    adults,
    noOfChildren,
    isBooked,
    handleBookNowClick,
  } = props;

  const discountPrice = price - (price / 100) * discount;

  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  return (
    <div className='px-7 py-6'>
      <h3>
        <span
          className={`${discount ? 'text-gray-400' : ''} font-bold text-xl`}
        >
          $ {price}
        </span>
        {discount ? (
          <span className='font-bold text-xl'>
            {' '}
            | discount {discount}%. Now{' '}
            <span className='text-tertiary-dark'>$ {discountPrice}</span>
          </span>
        ) : (
          ''
        )}
      </h3>

      <div className='w-full border-b-2 border-b-secondary my-2' />

      <h4 className='my-8'>{specialNote}</h4>

      <div className='flex'>
        <div className='w-1/2 pr-2'>
          <label
            htmlFor='check-in-date'
            className='block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Check In date
          </label>
          <DatePicker
            selected={checkinDate}
            onChange={date => setCheckinDate(date)}
            dateFormat='dd/MM/yyyy'
            minDate={new Date()}
            id='check-in-date'
            className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
          />
        </div>
        <div className='w-1/2 pl-2'>
          <label
            htmlFor='check-out-date'
            className='block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Check Out date
          </label>
          <DatePicker
            selected={checkoutDate}
            onChange={date => setCheckoutDate(date)}
            dateFormat='dd/MM/yyyy'
            disabled={!checkinDate}
            minDate={calcMinCheckoutDate()}
            id='check-out-date'
            className='w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary'
          />
        </div>
      </div>

      <div className='flex mt-4'>
        <div className='w-1/2 pr-2'>
          <label
            htmlFor='adults'
            className='block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Adults
          </label>
          <input
            type='number'
            id='adults'
            value={adults}
            onChange={e => setAdults(+e.target.value)}
            min={1}
            max={5}
            className='w-full border border-gray-300 rounded-lg p-2.5'
          />
        </div>
        <div className='w-1/2 pl-2'>
          <label
            htmlFor='children'
            className='block text-sm font-medium text-gray-900 dark:text-gray-400'
          >
            Children
          </label>
          <input
            type='number'
            id='children'
            value={noOfChildren}
            onChange={e => setNoOfChildren(+e.target.value)}
            min={0}
            max={3}
            className='w-full border border-gray-300 rounded-lg p-2.5'
          />
        </div>
      </div>

      {calcNoOfDays() > 0 ? (
        <p className='mt-3'>Total Price: $ {calcNoOfDays() * discountPrice}</p>
      ) : (
        <></>
      )}

      <button
        disabled={isBooked}
        onClick={handleBookNowClick}
        className='btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed'
      >
        {isBooked ? 'Booked' : 'Book Now'}
      </button>
    </div>
  );
};

export default BookRoomCta;
