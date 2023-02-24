export const removeVietnamese = (str) => {
  // remove accents
  let from = 'àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ'
  let to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy'
  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(RegExp(from[i], 'gi'), to[i])
  }

  str = str
    .toLowerCase()
    .trim()
    // eslint-disable-next-line no-useless-escape
    .replace(/[^a-z0-9\-]/g, '-')
    .replace(/-+/g, '-')

  return str
}
