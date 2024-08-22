export function calcReadTime(textList: string[]): number {
  const words_per_minute = 200;

  const totalWords = textList.reduce((acc, text) => {
    const words = text.split(/\s+/).length;
    return acc + words;
  }, 0);

  return Math.ceil(totalWords / words_per_minute);
}