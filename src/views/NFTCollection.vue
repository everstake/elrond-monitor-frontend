<template>
  <div class="container-lg nft-wrap">
    <nft-card />

    <nft-collections />
  </div>
</template>

<script>
import NftCard from '../components/nfts/NftCard.vue';
import NftCollections from '../components/nfts/NftCollections.vue';

export default {
  components: { NftCard, NftCollections },
};
</script>

<style lang="scss" scoped>
.nft-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
