<template>
  <div class="home">
    <b-container>
      <b-row class="mb-3 g-3">
        <b-col cols="12" xs="12" sm="12" md="6" lg="3">
          <b-card>
            <b-card-title class="border-bottom">Title</b-card-title>
            <b-card-text class="text-start">
              <div class="fw-bold fs-4">1000$</div>

              <div class="mt-3 mb-3">
                <div class="d-flex justify-content-between">
                  <span>Current price: $80</span>
                  <span>2%</span>
                </div>

                <div>
                  <span>Volume 24h: $77,889</span>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="12" xs="12" sm="12" md="6" lg="3">
          <b-card>
            <b-card-title class="border-bottom">Title</b-card-title>
            <b-card-text class="text-start">
              <div class="fw-bold fs-4">1000$</div>

              <div class="mt-3 mb-3">
                <div class="d-flex justify-content-between">
                  <span>Current price: $80</span>
                  <span>2%</span>
                </div>

                <div>
                  <span>Volume 24h: $77,889</span>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="12" xs="12" sm="12" md="6" lg="3">
          <b-card>
            <b-card-title class="border-bottom">Title</b-card-title>

            <b-card-text class="text-start">
              <div class="fw-bold fs-4">1000$</div>

              <div class="mt-3 mb-3">
                <div class="d-flex justify-content-between">
                  <span>Current price: $80</span>
                  <span>2%</span>
                </div>

                <div>
                  <span>Volume 24h: $77,889</span>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="12" xs="12" sm="12" md="6" lg="3">
          <b-card>
            <b-card-title class="border-bottom">Title</b-card-title>

            <b-card-text class="text-start">
              <div class="fw-bold fs-4">1000$</div>

              <div class="mt-3 mb-3">
                <div class="d-flex justify-content-between">
                  <span>Current price: $80</span>
                  <span>2%</span>
                </div>

                <div>
                  <span>Volume 24h: $77,889</span>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mb-3 g-3">
        <b-col>
          <b-row class="g-3">
            <b-col cols="6" md="6">
              <b-card>
                <b-card-title class="border-bottom">Title</b-card-title>

                <b-card-text class="text-start">
                  <div class="fw-bold fs-4">1000$</div>

                  <div class="mt-3 mb-3">
                    <div class="d-flex justify-content-between">
                      <span>Current price: $80</span>
                      <span>2%</span>
                    </div>

                    <div>
                      <span>Volume 24h: $77,889</span>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </b-col>

            <b-col cols="6" md="6">
              <b-card>
                <b-card-title class="border-bottom">Title</b-card-title>

                <b-card-text class="text-start">
                  <div class="fw-bold fs-4">1000$</div>

                  <div class="mt-3 mb-3">
                    <div class="d-flex justify-content-between">
                      <span>Current price: $80</span>
                      <span>2%</span>
                    </div>

                    <div>
                      <span>Volume 24h: $77,889</span>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </b-col>

            <b-col cols="6" md="6">
              <b-card>
                <b-card-title class="border-bottom">Title</b-card-title>

                <b-card-text class="text-start">
                  <div class="fw-bold fs-4">1000$</div>

                  <div class="mt-3 mb-3">
                    <div class="d-flex justify-content-between">
                      <span>Current price: $80</span>
                      <span>2%</span>
                    </div>

                    <div>
                      <span>Volume 24h: $77,889</span>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </b-col>

            <b-col cols="6" md="6">
              <b-card>
                <b-card-title class="border-bottom">Title</b-card-title>

                <b-card-text class="text-start">
                  <div class="fw-bold fs-4">1000$</div>

                  <div class="mt-3 mb-3">
                    <div class="d-flex justify-content-between">
                      <span>Current price: $80</span>
                      <span>2%</span>
                    </div>

                    <div>
                      <span>Volume 24h: $77,889</span>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </b-col>
          </b-row>
        </b-col>

        <b-col>
          <b-card class="h-100">Map</b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      listCards: [],
    };
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  margin: 21px 0;
  text-align: center;
}
</style>
