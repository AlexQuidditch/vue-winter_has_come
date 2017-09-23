<template lang="html">
  <transition-group tag="ul" name="friend-list" mode="out-in"
                    class="friend-list _requests">
    <friends-item v-for="( friendItem , index ) in FriendsRequests" :key="friendItem.id"
                  :friendItem = "friendItem">
    </friends-item>
  </transition-group>
</template>

<script>

	import friendsItem from '@templates/friends-item';

  export default {
    name: "friend-list_requests",
    components: { friendsItem },
    data: () => ({
      FriendsRequests: [
        {
          id: 1,
          isAgent: false,
          isOnline: true,
          avatar: 'christopher-campbell-40410.jpg',
          name: 'Ольга',
          sename: 'Смирнова',
    			information: {
    				specialization: 'Веб-дизайн, реклама',
    				lastVisit: '22.07.2017',
    				status: 'есть заказ',
    				town: 'Санкт-Петербург',
    				country: 'РФ',
    				education: {
    					place: 'СПбГУТД',
    					faculty: 'графический дизайн'
    				},
    				about: 'Я представляю компанию, которая занимается производством и дестрибуцией бытовых холодильников ...',
    			},
          education: 'ТГУ',
          company: null,
          description: 'Добрый день! Меня зовут Ольга, я только закончила обучение в ТГУ и ищу перспективную команду, куда ...',
          addedDate: 1,
          popularity: 11,
          works: [
            {
              id: '241',
              preview: 'project2.jpg'
            },
            {
              id: '129',
              preview: 'project.jpg'
            }
          ]
        },
        {
          id: 3,
          isAgent: true,
          isOnline: false,
          avatar: 'agent2.jpg',
          name: 'Александр',
          sename: 'Вернер',
    			information: {
    				specialization: 'Веб-дизайн, реклама',
    				lastVisit: '22.07.2017',
    				status: 'свободна',
    				town: 'Санкт-Петербург',
    				country: 'РФ',
    				education: {
    					place: 'СПбГУТД',
    					faculty: 'графический дизайн'
    				},
    				about: 'Привет! Меня зовут Елена, я студентка СПбГУТД на кафедре графического дизайна. Занимаюсь веб-дизайном и очень увлекаюсь всей IT сферой.'
    			},
          education: null,
          company: 'ЗАО "РЕ Трэйдинг"',
          description: 'Мы молодая и перспективная компания, основной целью которой является дестрибуция товаров народного ...',
          addedDate: 2,
          popularity: 4,
          works: [
            {
              id: '820',
              preview: 'project4.jpg'
            },
            {
              id: '822',
              preview: 'project5.jpg'
            }
          ]
        }
      ]
    })
  };

</script>

<style lang="scss">

  .friend-list._requests {}

</style>
