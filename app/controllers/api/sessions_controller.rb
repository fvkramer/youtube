class Api::SessionsController < ApplicationController 
    def create
        @user = User.find_by_credentials(
            username: user[:username],
            password: user[:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid Credentials"], status: 401
        end
    end

    def destroy
        logout!
        # redirect_to new_session_url
    end
end