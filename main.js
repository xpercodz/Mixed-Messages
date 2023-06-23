const part1 = ["Believe you can and you're halfway there", "The future belongs to those who believe in the beauty of their dreams", "In the middle of every difficulty lies opportunity", "The biggest adventure you can take is to live the life of your dreams", "The only limit to our realization of tomorrow will be our doubts of today", "Don't watch the clock; do what it does. Keep going", "Your time is limited, don't waste it living someone else's life"];
const part2 =["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"]
const part3 =["Why don't skeletons fight each other? They don't have the guts!","Why did the scarecrow win an award? Because he was outstanding in his field!","What's brown and sticky? A stick!","Why did the tomato turn red? Because it saw the salad dressing!","What did one wall say to the other wall? ", "Why did the bicycle fall over? It was two-tired!"]
function generateMessage() {
    // Generate random indices for each part
    const index1 = Math.floor(Math.random() * part1.length);
    const index2 = Math.floor(Math.random() * part2.length);
    const index3 = Math.floor(Math.random() * part3.length);
  
    // Retrieve a random message from each part using the indices
    const message1 = part1[index1];
    const message2 = part2[index2];
    const message3 = part3[index3];
  
    // Combine the messages to form a complete message
    const completeMessage = `a great quote: ${message1}, one of the astrology signs: ${message2}, a good nonsensical joke: ${message3}`;
  
    return completeMessage;
  }
  
  // Generate and display a random message
  const randomMessage = generateMessage();
  console.log(randomMessage);