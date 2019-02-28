<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
        {if $domain != ''}<p><strong>Домен</strong>: {$domain}</p>{/if}
        {if $available != ''}<p><strong>Доступность</strong>: {$available}</p>{/if}
        {if $type != ''}<p><strong>Локация</strong>: {$type}</p>{/if}
        {if $registrar != ''}<p><strong>Регистратор</strong>: {$registrar}</p>{/if}
        {if $statuses != ''}<p><strong>Статусы</strong>: {$statuses}</p>{/if}
        {if $created != ''}<p><strong>Дата регистрации</strong>: {$created | dateAgo}</p>{/if}
        {if $expires != ''}<p><strong>Истекает</strong>: {$expires | dateAgo}</p>{/if}
        {if $deletion != ''}<p><strong>Удаление из реестра</strong>: {$deletion | dateAgo}</p>{/if}
        {if $whois != ''}
             <pre class="card p-4">
                {$whois}
             </pre>
         {/if}
    </div>
</div>