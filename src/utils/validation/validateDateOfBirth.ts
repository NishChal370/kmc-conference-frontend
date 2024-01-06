function validateDateOfBirth(value: string): boolean {
      const birthDate = new Date(value);
      const today = new Date();
      const minDate = new Date('1900-01-01');

      today.setHours(0, 0, 0, 0); // Ensuring comparison based only on date

      return !isNaN(birthDate.getTime()) && birthDate >= minDate && birthDate < today;
}

export default validateDateOfBirth;