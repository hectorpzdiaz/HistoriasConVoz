from gtts import gTTS
import os
import boto3
from flask import Flask , render_template , request , jsonify
import io
from pydub.playback import play
import openai
from pydub import AudioSegment
from flask_cors import CORS


"""chatgpt"""


openai.api_key="" #Poner tu cuenta de openai

"""voz de amazon polly"""

polly_client = boto3.client(
    'polly',
     region_name='eu-west-1',
    aws_access_key_id='',#Poner tu cuenta de amazon
     aws_secret_access_key=''#Poner tu cuenta de amazon
 )



app = Flask(__name__,  template_folder='templates') #cualquier nombre para el parametro vale , no es relevante
CORS(app)


@app.route('/' ,methods=['GET', 'POST'])
def index():   
  
   
    if request.method == 'POST':
        
        
        titulo = request.form.get('title')
        genero= request.form.get("genero")
        historia = request.form.get('history')
      
        ruta = os.path.join('static', 'audios', f'{titulo}.mp3')
        print(ruta + "geneo " + genero + titulo)
       
        print("he entrado en formlario textoo creado por el usuario" )

        # Procesar los datos del formulario aquí
        
        if 1+1 == 2: 
    
            if genero=="Mujer":
              
                respuesta = polly_client.synthesize_speech(
                Text=historia,
                VoiceId='Lucia',
                OutputFormat='mp3',
                LanguageCode='es-ES',
                 )

                with open (ruta, 'wb' ) as archivo:
                    archivo.write(respuesta['AudioStream'].read())           
    
                audio_path=  ruta
                print("probando " + audio_path)
           
      
                response_data = {"audio": audio_path}
               
                return jsonify(response_data), 200  # 200 OK 
              

            elif genero=="Hombre":
                print("eyy")
                respuesta = polly_client.synthesize_speech(
                Text=historia,
                VoiceId='Enrique',
                OutputFormat='mp3',
                LanguageCode='es-ES',
                  )

                with open (ruta, 'wb' ) as archivo:
                    archivo.write(respuesta['AudioStream'].read())           
    
                audio_path=ruta
                print("probando " + audio_path) 
                response_data = {"audio": audio_path}
                return jsonify(response_data), 200  # 200 OK 

                 
     
        
         # Si es una solicitud AJAX, devuelve una respuesta JSON
          
        
           
    else:
            # Si no es una solicitud AJAX, devuelve una página HTML completa
            print("ha entrado en el else de la solicutud get")
            return render_template('index.html')  # This line is outside the if block
         
            
                 
 

respuesta_ia = ""
ruta_ia = ""

@app.route('/formularioIA', methods=['GET', 'POST'])
def formularioIA(): 
    
   
    global respuesta_ia 
    global ruta_ia 

    
    if request.method == 'GET':
        titulo_ia = request.args.get('title_ia')
        ruta_ia = os.path.join('static', 'audios', f'{titulo_ia}.mp3')
        print("hola")
      
        
     

        input_historia = request.args.get('creacion')
       
        response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": input_historia}
        ],
        max_tokens=2048  # Define la longitud máxima de la respuesta

         )
        respuesta_ia= response.choices[0].message["content"]
        print( respuesta_ia)
        response_data_ia ={"mensaje_ia": respuesta_ia}
        return jsonify(response_data_ia ), 200  
    
    print( "probandoooo" +  respuesta_ia)   
    print( "probandoooo" +   ruta_ia )   


    if request.method == 'POST':
          
    
            print("entro en psot")
            genero= request.form.get("genero")
            print("no genero" + genero)

          
            if genero=="Mujer":
              
                contenedor_audio = polly_client.synthesize_speech(
                Text= respuesta_ia,
                VoiceId='Lucia',
                OutputFormat='mp3',
                LanguageCode='es-ES',
                 )
                print("historia" + respuesta_ia)
                with open (ruta_ia, 'wb' ) as archivo:
                    archivo.write(contenedor_audio['AudioStream'].read())           
    
                audio_path_ia=  ruta_ia
                print("probando " + audio_path_ia)
                print("he entrado en mujer")
           
      
                response_data_ia = {"audio_ia": ruta_ia}
               
                return jsonify(response_data_ia), 200  # 200 OK 
              
              

            elif genero=="Hombre":

                contenedor_audio = polly_client.synthesize_speech(
                Text= respuesta_ia,
                VoiceId='Enrique',
                OutputFormat='mp3',
                LanguageCode='es-ES',
                  )

                with open (  ruta_ia, 'wb' ) as archivo:
                    archivo.write(contenedor_audio['AudioStream'].read())           
    
                audio_path_ia =  ruta_ia
                print("probando " + audio_path_ia) 
                response_data = {"audio_ia": audio_path_ia}
                return jsonify(response_data), 200  # 200 OK 

                 
     

         # Si es una solicitud AJAX, devuelve una respuesta JSON
             
      
        
           
    else:
            # Si no es una solicitud AJAX, devuelve una página HTML completa
            print("ha entrado en el else")
         
            
           
    return render_template('index.html')  # This line is outside the if block

  
















if __name__ == '__main__':
    if __name__ == '__main__':
     app.run(debug=True, host="0.0.0.0", port=5000)
   
    else:
        port = int(os.environ.get("PORT", 5000))
        app.run(debug=False, host="0.0.0.0", port=port)

