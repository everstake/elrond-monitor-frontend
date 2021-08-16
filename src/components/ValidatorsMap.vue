<template>
  <div id="chartMap"></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';

export default {
  name: 'ValidatorsMap',
  computed: {
    ...mapGetters(['validatorsMap']),
  },
  async mounted() {
    await this.fetchValidatorsMap();

    const map = am4core.create('chartMap', am4maps.MapChart);

    map.geodata = am4geodataWorldLow;

    map.projection = new am4maps.projections.Miller();

    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ['AQ'];

    polygonSeries.useGeodata = true;

    // Add image series
    const imageSeries = map.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = 'longitude';
    imageSeries.mapImages.template.propertyFields.latitude = 'latitude';
    imageSeries.mapImages.template.tooltipText =
      '{city}: {validators}[/] nodes';
    imageSeries.mapImages.template.propertyFields.url = 'url';

    const circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 7;
    circle.fill = 'rgba(63, 236, 111, 0.9)';
    circle.nonScaling = true;
    circle.f = '#f00';

    imageSeries.data = this.validatorsMap;
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
  methods: {
    ...mapActions(['fetchValidatorsMap']),
  },
};
</script>

<style scoped>
#chartMap {
  width: 100%;
  height: 100%;
}
</style>
