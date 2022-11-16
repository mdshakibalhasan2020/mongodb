var MongoClient=require('mongodb').MongoClient;
var URL = "mongodb+srv://sakib_175:shakibalhasan175Eva@cluster0.baeqkt6.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(URL,function(error,MyMongoClient){
    if(error){
        console.log("connection fail");
    }
    else{
        console.log("connection success");
        //InsertData(MyMongoClient);
        //DeleteData(MyMongoClient);
        //DeleteAllIteam(MyMongoClient);
        //FindOneWithoutCondition(MyMongoClient);
        //FindOneWithCondition(MyMongoClient);
        //FindAllData(MyMongoClient);
        //FindAllDataByProjection(MyMongoClient);
        //FindAllDataByQuery(MyMongoClient);
        //FindAllDataLimit(MyMongoClient);
        FindAllDataSort(MyMongoClient);
    }
});
function InsertData(MyMongoClient){
    var MyDataBase = MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");

    var MyData={name:"shakib",Roll:"01",class:"ten",city:"dhaka"}
    var MyData = {name:"rakib",Roll:"02",class:"ten",city:"dhaka"}
    var MyData = {name:"anik",Roll:"04",class:"ten",city:"rangpur"}
    var MyData = {name:"mugdho",Roll:"03",class:"ten",city:"rangpur"}
    MyCollection.insertOne(MyData,function(error){
        if(error){
            console.log("data insert fail");
        }
        else{
            console.log("data insert success");
        }
    })
}
function DeleteData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    var DeleteIteam={Roll:"03"};
    MyCollection.deleteOne(DeleteIteam,function(error){
        if(error){
            console.log("data delete fail");
        }
        else{
            console.log("data delete success");
        }
    });


}
function DeleteAllIteam(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    MyCollection.deleteMany(function(error,ResultObj){
        if(error){
            console.log("delete is not success");
        }
        else{
            console.log(ResultObj);
        }
    });
}
function FindOneWithoutCondition(MyMongoClient){
    var MyDataBase = MyMongoClient.db("school");
    var MyColletion = MyDataBase.collection("student");
    var FindObj = {};
    MyColletion.findOne(FindObj,function(error,result){
        console.log(result);
    });

}
function FindOneWithCondition(MyMongoClient){
    var MyDataBase = MyMongoClient.db("school");
    var MyColletion = MyDataBase.collection("student");
    var FindObj = {Roll: "03"};
    MyColletion.findOne(FindObj,function(error,result){
        console.log(result);
    });
}
function FindAllData(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    MyCollection.find().toArray(function(error,result){
        console.log(result);
    });
}
function FindAllDataByProjection(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    var ItemObj={};
    var IteamProjection={projection:{Roll:" "}};
    MyCollection.find(ItemObj,IteamProjection).toArray(function(error,result){
        console.log(result);
    });
}
function FindAllDataByQuery(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    var Query={name:"mugdho"};
    MyCollection.find(Query).toArray(function(error,result){
        console.log(result);
    });
}
function FindAllDataLimit(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    MyCollection.find().limit(2).toArray(function(error,result){
        console.log(result);
    });
}
function FindAllDataSort(MyMongoClient){
    var MyDataBase=MyMongoClient.db("school");
    var MyCollection=MyDataBase.collection("student");
    var SortPatern={Roll:-1};
    MyCollection.find().sort(SortPatern).toArray(function(error,result){
        console.log(result);
    });
}

