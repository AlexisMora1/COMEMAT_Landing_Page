import { Calendar, BookMarked } from "lucide-react"

export default function Article({article}:{article:{title: string, date:string,topic:string}}){
    function onclick(){

    }
    return(
        <div className="bg-white p-4 rounded-lg shadow">
            <button>
                <h3 className="font-bold mb-2">{article.title}</h3>
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <BookMarked className="w-4 h-4 mr-2" />
                  <span>{article.topic}</span>
                </div>
            </button>
        </div>
    )
}