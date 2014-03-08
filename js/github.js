myapp.factory('Github', function($http){
	return {
		list_issues: function(owner, repo, page){
			if(!page){
				page = 1;
			}
			var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues";
			return $http.get(url, {params:{page: page, state: 'all'}});
		},
        search_users: function(q){
            var url="https://api.github.com/search/users";
            return $http.get(url, {params:{q: q}});
        },
        list_user_repos: function(owner){
            var url="https://api.github.com/users/"+owner+"/repos";
            return $http.get(url);
        },
        list_issue_comments: function(owner, repo, issue_number){
            var url="https://api.github.com/repos/"+owner+"/"+repo+"/issues/"+issue_number+"/comments";
            return $http.get(url);
        },
        get_contents: function(owner, repo, path){
            var url="https://api.github.com/repos/"+owner+"/"+repo+"/contents"+path;
            return $http.get(url);
        },
        decode_file_contents : function(contents_base64){
            var lines_base_64 = contents_base64.split("\n");
            var lines = [];
            for(var i=0; i<lines_base_64.length; i++){
                lines.push(atob(lines_base_64[i]));
            }
            return lines.join("");
        }
	}
})