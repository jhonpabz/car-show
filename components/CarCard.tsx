'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

export const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    year,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
  } = car;
  const [] = useState();

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
    </div>
  );
};
