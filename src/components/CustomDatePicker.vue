<template>
  <div>
    <div class="datepicker-wrapper">
      <b-btn
        v-for="day in switchDate"
        :key="day"
        :class="[{ 'day--active': day === selectedDay }]"
        variant="link"
        @click="selectDay(day)"
        >{{ day }}</b-btn
      >

      <DatePicker
        v-model="rangeDate"
        range
        :clearable="false"
        :disabled-date="disabledDates"
        value-type="timestamp"
        :class="[{ 'day--active': selectedDay === 'calendarRange' }]"
        @change="handlerRangeDate"
      >
        <template #icon-calendar>
          <b-icon
            icon="calendar-fill"
            font-scale="1.3"
            :class="{
              'mx-icon-calendar--active': selectedDay === 'calendarRange',
            }"
            @click="selectDay('calendarRange')"
          />
        </template>
      </DatePicker>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DatePicker from 'vue2-datepicker';
import getDates from '../mixins/getDates';

export default {
  name: 'CustomDatePicker',
  components: {
    DatePicker,
  },
  mixins: [getDates],
  props: {
    requestName: {
      type: Function,
      default: () => null,
    },
  },
  data() {
    return {
      rangeDate: [],
      open: false,
      switchDate: ['7d', '1m', '3m', '6m', '1y'],
      selectedDay: '1y',
    };
  },
  mounted() {
    const today = Math.round(new Date().getTime() / 1000);
    this.requestName(this.$_getDates(this.selectedDay, today));
  },
  methods: {
    ...mapActions([
      'fetchStakeRange',
      'fetchPriceRange',
      'fetchDelegatorsRange',
    ]),
    handlerRangeDate(val) {
      const params = {
        from: val[0] / 1000,
        to: val[1] / 1000,
      };
      this.requestName(params);
    },
    selectDay(day) {
      this.selectedDay = day;
      const today = Math.round(new Date().getTime() / 1000);

      if (day !== 'calendarRange') {
        this.requestName(this.$_getDates(day, today));
      }
    },
    disabledDates(date) {
      return new Date(date).getTime() > new Date().getTime();
    },
  },
};
</script>

<style lang="scss">
.datepicker-wrapper {
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: $border-radius-card;
  background-color: $main-white;

  & button {
    padding: 3px 11px;
    color: $dark-gary;

    &:hover {
      color: $font-black;
    }

    &.day--active {
      background: $main-blue;
      border-radius: $border-radius-card;
      color: $main-white;
    }
  }
}

.mx-datepicker {
  padding: 3px 11px;
  width: auto;

  &.day--active {
    background: $main-blue;
    border-radius: $border-radius-card;
  }

  .mx-input {
    display: none;
  }

  .mx-icon-calendar {
    cursor: pointer;
    position: static;

    &--active {
      color: $main-white;
    }
  }
}
</style>
