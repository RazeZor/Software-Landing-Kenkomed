import re

with open('components/pricing.tsx', 'r') as f:
    content = f.read()

# Replace <input and </input>
content = re.sub(r'<input\b', r'<Input', content)
content = re.sub(r'</input>', r'</Input>', content)

# Replace <textarea and </textarea>
content = re.sub(r'<textarea\b', r'<Textarea', content)
content = re.sub(r'</textarea>', r'</Textarea>', content)

# Replace <label and </label>
# We need to make sure we don't accidentally replace <Label> if we run it twice, but it's lowercase so it's fine
content = re.sub(r'<label\b', r'<Label', content)
content = re.sub(r'</label>', r'</Label>', content)

# Replace the bulky classes on inputs/selects with just 'mt-2' or similar, but wait!
# If we replace the select, we should be careful. We can just change <select to <select but maybe not. The user says "with the same aesthetic", the select in WorkspaceForm uses the shadcn Select. 
# But implementing Shadcn Select for all of these is a huge structural change (Select, SelectTrigger, SelectValue, SelectContent, SelectItem).
# A native select with shadcn Input classes looks almost identical.
# Let's replace the bulky class on inputs and selects.
bulky_class = r'className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"'
content = content.replace(bulky_class, 'className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"')

with open('components/pricing.tsx', 'w') as f:
    f.write(content)
