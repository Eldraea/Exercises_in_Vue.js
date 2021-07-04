function getRandonValue(min, max)
{
    return Math.floor(Math.random()*(max-min)) + min;
}

const app = Vue.createApp({
    data()
    {
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            IsWin: null,
            logMessages: [],


        };
    },
    computed:{
        monsterHealthBar()
        {
            if(this.monsterHealth <=0)
            {
                return {width: '0%'};
            }
            return { width: this.monsterHealth + '%'};
        },
        playerHealthBar()
        {
            if(this.playerHealth <=0)
            {
                return{ width: '0%'};
            }
            return  {width: this.playerHealth + '%'};
        },
        disableSpecialAttack()
        {
            return this.currentRound%3!==0;
        },

    },
    watch: {
        playerHealth(value){

            if(value <= 0 && this.monsterHealth <=0){
                this.IsWin ='Draw';
            }
            else if(value <= 0)
            {
                this.IsWin ='Monster';
            }

        },
        monsterHealth(value){

            if(value <= 0 && this.playerHealth <=0){
                this.IsWin ='Draw';
            }
            else if(value <= 0)
            {
                this.IsWin ='Player';
            }
        },

    },
    methods: {
        startGame()
        {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.IsWin = null;
            this.currentRound = 0;
            this.logMessages=[];
        },

        attackMonster()
        {
            const damages =getRandonValue(5,12);
            this.monsterHealth -= damages;
            this.addLogMessage('Player', 'attacks', damages);
            this.attackPlayer();
            this.currentRound++;
        },

        attackPlayer(){
            const damages = getRandonValue(8, 15);
            this.playerHealth -= damages;
            this.addLogMessage('Monster', 'attacks', damages);

            
        },

        specialAttackMonster()
        {
            const damages =getRandonValue(10,25);
            this.monsterHealth -= damages;
            this.addLogMessage('Player', 'attacks', damages);
            this.attackPlayer();
            this.currentRound++;
        },

        healPlayer()
        {
            const healValue = getRandonValue(8,20);
            
            if(this.playerHealth + healValue > 100)
                this.playerHealth = 100;
            else
                this.playerHealth += healValue;
                this.addLogMessage('Player', 'heals', healValue);
            this.attackPlayer();  
        },

        surrender()
        {
            this.IsWin = 'Monster';
        },

        addLogMessage(who, what, value)
        {
                this.logMessages.unshift({
                    actionBy: who,
                    actionType: what,
                    actionValue: value,
                });
        },

    }

});

app.mount('#game');