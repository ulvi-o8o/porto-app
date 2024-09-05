// import React, { useState, useEffect } from "react";

// const CountdownTimer = () => {
//   // Başlangıç süresini saniye cinsinden belirleyin (örneğin, 10 saniye)
//   const [timeLeft, setTimeLeft] = useState(10);

//   useEffect(() => {
//     // Eğer süre sıfır ise geri sayımı durdur
//     if (timeLeft === 0) return;

//     // Geri sayımı başlatmak için bir interval oluştur
//     const intervalId = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000); // Her 1000ms (1 saniye) bir sayıyı azalt

//     // Bileşen her güncellendiğinde interval'i temizle
//     return () => clearInterval(intervalId);
//   }, [timeLeft]); // timeLeft her değiştiğinde useEffect çalışır

//   return (
//     <div>
//       <h1>Geri Sayım: {timeLeft} saniye</h1>
//       {timeLeft === 0 && <h2>Süre Doldu!</h2>}
//     </div>
//   );
// };

// export default CountdownTimer;

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // 32 gün sonraki zamanı hedef olarak belirliyoruz (32 gün x 24 saat x 60 dakika x 60 saniye = 2764800 saniye)
  const targetDate = new Date().getTime() + 32 * 24 * 60 * 60 * 1000;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Zamanlayıcıyı durdurmak için geri sayım bittiğinde interval'i temizleyin
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="flex justify-center items-center">
      {timeLeft.days !== undefined ? (
        <div>
          <h2 className="text-[#332859] font-bold text-3xl">
            {timeLeft.days} Day {timeLeft.hours} Hr {timeLeft.minutes} Min{" "}
            {timeLeft.seconds} Sec
          </h2>
        </div>
      ) : (
        <h2>Süre Doldu!</h2>
      )}
    </div>
  );
};

export default CountdownTimer;
