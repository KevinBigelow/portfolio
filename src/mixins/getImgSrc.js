export default {
  methods: {
    getImgSrc(dir, src) {
        let image = dir + '/' + src;
        return require('@/assets/' + image);
    }
  }
}
