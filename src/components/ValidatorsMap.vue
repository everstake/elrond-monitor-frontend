<template>
  <div ref="chartMap" class="map"></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

export default {
  name: 'ValidatorsMap',
  computed: {
    ...mapGetters(['validatorsMap']),
  },
  async mounted() {
    await this.fetchValidatorsMap();

    // Create map instance
    const map = am4core.create(this.$refs.chartMap, am4maps.MapChart);

    // Themes begin
    am4core.useTheme(am4themesAnimated);

    // Set map definition
    map.geodata = am4geodataWorldLow;

    // Set projection
    map.projection = new am4maps.projections.Miller();

    // Create map polygon series
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    // Exclude Antartica
    polygonSeries.exclude = ['AQ'];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Add image series
    const imageSeries = map.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = 'longitude';
    imageSeries.mapImages.template.propertyFields.latitude = 'latitude';
    imageSeries.mapImages.template.tooltipText =
      '{city}: {validators}[/] nodes';
    imageSeries.mapImages.template.propertyFields.url = 'url';
    imageSeries.fill = am4core.color('rgb(250,250,250)');

    const circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.nonScaling = true;
    circle.radius = 6;
    circle.fill = '#0085ff';
    circle.fillOpacity = 0.5;
    circle.strokeWidth = 1;
    circle.stroke = '#0085ff';

    // Events hover
    const hoverCircle = circle.states.create('hover');
    hoverCircle.properties.fillOpacity = 1;
    hoverCircle.properties.radius = 12;

    imageSeries.data = this.validatorsMap;
  },
  beforeDestroy() {
    am4core.disposeAllCharts();
  },
  methods: {
    ...mapActions(['fetchValidatorsMap']),
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
