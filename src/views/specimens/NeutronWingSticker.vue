<script>
  import SpecimenBase from '../SpecimenBase.vue';

  export default {
    extends: SpecimenBase,
    data() {
      return {
        specimen: {
          name: 'Neutron Wing Sticker',
          categories: ['Graphic Design'],
          description: 'Captain, why are we out here chasing comets? Maybe we better talk out here; the observation lounge has turned into a swamp. I suggest you drop it, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. For an android with no feelings, he sure managed to evoke them in others. Sure. You\'d be surprised how far a hug goes with Geordi, or Worf. This is not about revenge. This is about justice. You\'re going to be an interesting companion, Mr. Data. We have a saboteur aboard.',
          images: [
            {
              featured: 'True',
              alt: 'Stack of rad stickers',
              src: 'neutron_wing_sticker/IMG_1484-sml.jpg'
            }
          ]
        }
      }
    }
  }
</script>
