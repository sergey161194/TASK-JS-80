const photosGallery = (title, dimensions, date) => {
  return {
    title,
    info() {
      console.log(`Фото "${title}" имеет разрешение ${dimensions}`);
    },
    [dimensions]: true, // Вычисляемое свойство
    publishInfo() {
      console.log(`Фото "${title}" было опубликовано ${Math.floor((new Date().getTime() - date.getTime()) / 1000)} секунды назад`);
    },
    date
  };
}

const myDogPhoto = photosGallery(
    "My dog",
    "1920x1080",
    new Date()
);

const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";

myDogPhoto.info();
/* Фото "My dog" имеет разрешение 1920x1080 */

setTimeout(() => myDogPhoto.publishInfo(), 2000);
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ
к параметрам функции "photosGallery" (например "date")? */

console.log(myDogPhoto[testDimension1]); // true
console.log(myDogPhoto[testDimension2]); // undefined
