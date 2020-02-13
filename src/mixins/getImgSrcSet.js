export default {
  methods: {
    getImgSrcSet(dir, name, sizes, extension) {
      let path = dir + '/',
          srcset = [];

      sizes.forEach(size => {
        let image = name + '--' + size + extension,
            src = require('@/assets/' + path + image);
        srcset.push(src + ' ' + size + 'w')
      });

      return(srcset)
    }
  }
}
