let initialState = {
    fullNews: [
        {
            id:1,
            fullImage: 'https://www.fnewsbulletin.com/wp-content/uploads/2020/03/FNB-12.jpg',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id:2,
            fullImage: 'https://telemetr.me/photos/d0a7f901ab5340201a05166976dfb7e0.jpg',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id:3,
            fullImage: 'https://ik.arhano.ru/wp-content/uploads/2019/04/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-21-04-2019-131727.jpg',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id:4,
            fullImage: 'https://www.aielloassicurazioni.it/wp-content/uploads/news-04.jpg',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id:5,
            fullImage: 'http://rabkor.ru/wp-content/uploads/2019/12/d59ddc8ce75c2b7861d6cbadf09fa40d-1200x800.jpg',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            id:6,
            fullImage: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-01/KAZ_4810.JPG.jpg?itok=lm7slgMa',
            fullText: `Рыжий кот по кличке Купидон, живущий в британском городе Борнмут в графстве Дорсет, убежал из дома и прошел 38 км, чтобы вернуться в деревню Одсток в графстве Уилтшир, где он родился, пишет Би-би-си.

            Животное ушло из дома в конце декабря и было обнаружено лишь в январе.
            
            «Он жил в соседнем доме два года назад. Я даже представить не могла, что это тот самый котенок», — рассказала женщина, которая нашла питомца.
            
            Она выложила фотографию кота в соцсетях. Публикацию увидела хозяйка Купидона. Женщина была сильно удивлена, поскольку выяснилось, что кот преодолел почти 40 км, чтобы вернуться в родные места.`
        },

        {
            id:7,
            fullImage: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2021-01/Depositphotos_276649090_xl-2015.jpg?itok=dgTmAoV4',
            fullText: `Японские биологи выяснили, что кошек привлекают листья кошачьей мяты и актинидии в том числе потому, что в них содержатся вещества, отпугивающие комаров. Биологи выяснили, что в листьях японских актинидий содержится вещество непеталактол, наблюдая за тем, как кошки реагировали на экстракты различных органических молекул, присутствующих в мякоти этих растений.`
        },
    ]
}

export const newsPageReducer = (state = initialState, action) => {
    return state;
}