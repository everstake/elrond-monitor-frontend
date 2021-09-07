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
        value-type="timestamp"
        :class="[{ 'day--active': selectedDay === 'calendar' }]"
      >
        <template #icon-calendar>
          <b-icon
            icon="calendar-fill"
            font-scale="1.3"
            :class="{ 'mx-icon-calendar--active': selectedDay === 'calendar' }"
            @click="selectDay('calendar')"
          />
        </template>
      </DatePicker>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';

export default {
  name: 'CustomDatePicker',
  components: {
    DatePicker,
  },
  data() {
    return {
      rangeDate: [],
      open: false,
      switchDate: ['1d', '7d', '1m', '3m', '6m', '1y'],
      selectedDay: '1y',
    };
  },
  methods: {
    selectDay(day) {
      this.selectedDay = day;

      switch (day) {
        case '1d':
          this.rangeDate = [];
          break;
        default:
      }
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
